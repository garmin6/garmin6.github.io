import { ref, computed } from 'vue'
import { discTestData } from '@/data/disc-test-data'
import type { TypeKey, ScoreItem } from '@/types/disc-test'

export function useDiscTest() {
  const { questions, typeInfo } = discTestData

  const page = ref<'start' | 'question' | 'result'>('start')
  const currentIndex = ref(0)
  const answers = ref<(number | null)[]>(new Array(questions.length).fill(null))

  const currentQuestion = computed(() => questions[currentIndex.value])
  const isLastQuestion = computed(() => currentIndex.value === questions.length - 1)
  const progressPercent = computed(() => {
    if (!questions.length) return 0
    return Math.round((currentIndex.value / questions.length) * 100)
  })

  const scores = computed(() => {
    const counts: Record<TypeKey, number> = { D: 0, I: 0, S: 0, C: 0 }
    answers.value.forEach((ansIdx, qIdx) => {
      if (ansIdx !== null && questions[qIdx] && questions[qIdx].options[ansIdx]) {
        counts[questions[qIdx].options[ansIdx].type]++
      }
    })
    return counts
  })

  const scoreList = computed<ScoreItem[]>(() => {
    const total = questions.length || 1
    const list: ScoreItem[] = [
      { type: 'D', name: '支配型', count: scores.value.D, percent: (scores.value.D / total) * 100 },
      { type: 'I', name: '影响型', count: scores.value.I, percent: (scores.value.I / total) * 100 },
      { type: 'S', name: '稳健型', count: scores.value.S, percent: (scores.value.S / total) * 100 },
      { type: 'C', name: '谨慎型', count: scores.value.C, percent: (scores.value.C / total) * 100 },
    ]
    return list.sort((a, b) => b.count - a.count)
  })

  const dominantTypes = computed<TypeKey[]>(() => {
    const max = Math.max(...Object.values(scores.value))
    if (max === 0) return []
    return (['D', 'I', 'S', 'C'] as TypeKey[]).filter(t => scores.value[t] === max).sort()
  })

  const dominantTypesLabel = computed(() => {
    return dominantTypes.value.map(t => `${t}型`).join(' / ')
  })

  const coreTraits = computed(() => {
    return dominantTypes.value.map(t => typeInfo[t]?.name || '').filter(Boolean).join(' + ')
  })

  const developmentTips = computed(() => {
    const tips: string[] = []
    dominantTypes.value.forEach(t => {
      if (typeInfo[t]) {
        tips.push(...typeInfo[t].tips)
      }
    })
    return tips
  })

  function startTest() {
    page.value = 'question'
    currentIndex.value = 0
    answers.value = new Array(questions.length).fill(null)
  }

  function selectOption(idx: number) {
    answers.value[currentIndex.value] = idx
    if (!isLastQuestion.value) {
      setTimeout(() => {
        currentIndex.value++
      }, 250)
    }
  }

  function nextQuestion() {
    if (isLastQuestion.value) {
      page.value = 'result'
    } else {
      currentIndex.value++
    }
  }

  function prevQuestion() {
    if (currentIndex.value > 0) {
      currentIndex.value--
    }
  }

  function restartTest() {
    page.value = 'start'
    currentIndex.value = 0
    answers.value = new Array(questions.length).fill(null)
  }

  function shareResult() {
    const text = `我的 DISC 行为模型测试结果是：${dominantTypesLabel.value}。快来看看你的行为风格吧！`
    if (navigator.share) {
      navigator.share({
        title: 'DISC 行为模型测试结果',
        text,
        url: window.location.href,
      }).catch(() => {})
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(text + ' ' + window.location.href).then(() => {
        alert('结果已复制到剪贴板')
      })
    } else {
      alert(text)
    }
  }

  return {
    page,
    currentIndex,
    answers,
    questions,
    currentQuestion,
    isLastQuestion,
    progressPercent,
    scoreList,
    scores,
    dominantTypes,
    dominantTypesLabel,
    coreTraits,
    developmentTips,
    typeInfo,
    startTest,
    selectOption,
    nextQuestion,
    prevQuestion,
    restartTest,
    shareResult,
  }
}

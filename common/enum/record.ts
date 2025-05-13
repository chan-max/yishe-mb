import { useLocalStorage } from '../hooks/storage'
import { ref } from 'vue'

export enum Daycords {
  // 睡眠
  SLEEP = 'sleep',

  // 饮食
  DIET = 'diet',

  // 身高
  HEIGHT = 'height',

  // 体重
  WEIGHT = 'weight',

  // 步数
  WALK = 'walk',

  // 饮水
  WATER = 'water',

  // 心率脉搏
  PULSE = 'pulse',

  // 心情
  MOOD = 'mood',

  // 吸烟
  SMOKE = 'smoke',

  // 喝酒
  DRINK = 'drink',

  // 生病
  DISEASE = 'disease',

  // 事件
  EVENT = 'event',

  // 标记
  MARK = 'mark',

  // 运动
  SPORT = 'sport'
}

/**
 * @define 所有记录类型
 */
export const RecordTypeOptions = ref([
  {
    type: 'sleep',
    label: '睡眠',
    logo: '/static/img/record/sleep.png'
  },
  {
    type: 'diet',
    label: '饮食',
    logo: '/static/img/record/diet.png'
  },
  {
    type: 'water',
    label: '饮水',
    logo: '/static/img/record/water.png'
  },
  {
    type: 'walk',
    logo: '/static/img/record/walk.png',
    label: '步数'
  },
  {
    type: 'height',
    logo: '/static/img/record/height.png',
    label: '身高'
  },
  {
    type: 'weight',
    label: '体重',
    logo: '/static/img/record/weight.png'
  },
  {
    type: 'pulse',
    label: '心率',
    logo: '/static/img/record/pulse.png'
  },

  {
    type: 'mood',
    label: '心情',
    logo: '/static/img/record/mood.png'
  },

  {
    type: 'feeling',
    label: '感觉',
    logo: '/static/img/record/feeling.png'
  },

  {
    type: 'period',
    label: '生理期',
    logo: '/static/img/record/period.png'
  },

  {
    type: 'smoke',
    label: '吸烟',
    logo: '/static/img/record/smoke.png'
  },

  {
    type: 'drink',
    label: '喝酒',
    logo: '/static/img/record/drink.png'
  },

  {
    type: 'disease',
    label: '生病',
    logo: '/static/img/record/disease.png'
  },

  {
    type: 'event',
    label: '事件',
    logo: '/static/img/record/event.png'
  },

  {
    type: 'mark',
    label: '标记',
    logo: '/static/img/record/mark.png'
  },

  {
    type: 'sport',
    label: '运动',
    logo: '/static/img/record/sport.png'
  },
  {
    type: 'luck',
    label: '运气',
    logo: '/static/img/record/luck.png'
  }
])

export function getRecordTypeOptionByType (type: string) {
  if (!type) {
    console.error('record type is empty ')
    return {
      type: 'unknown',
      label: '未知类型',
      logo: '/static/img/record/unknown.png'
    }
  }

  return RecordTypeOptions.value.find(item => item.type == type)
}

// 所有可能出现的心情
export const moodOptions = useLocalStorage('mood_options', [
  // 积极情绪 (评分范围：7~10) - 明亮鲜艳的色系
  {
    type: 'happy',
    label: '高兴',
    description: '感到快乐和满足',
    backgroundColor: '#ffeb3b',
    color: '#000000',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'excited',
    label: '兴奋',
    description: '充满热情和期待',
    backgroundColor: '#ff5722',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'content',
    label: '满足',
    description: '感到内心平静与满足',
    backgroundColor: '#8bc34a',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'calm',
    label: '平静',
    description: '内心安宁，没有压力',
    backgroundColor: '#2196f3',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'relaxed',
    label: '放松',
    description: '身心放松，感到舒适',
    backgroundColor: '#9c27b0',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'grateful',
    label: '感激',
    description: '对生活中的美好事物心存感激',
    backgroundColor: '#ffc107',
    color: '#000000',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'optimistic',
    label: '乐观',
    description: '对未来充满希望和信心',
    backgroundColor: '#4caf50',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'proud',
    label: '自豪',
    description: '对自己的成就或行为感到骄傲',
    backgroundColor: '#ff9800',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'energetic',
    label: '充沛',
    description: '充满能量，积极行动',
    backgroundColor: '#00bcd4',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'hopeful',
    label: '希望',
    description: '对未来怀有积极的期待',
    backgroundColor: '#ffb300',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'loved',
    label: '被爱',
    description: '感受到被关心和支持',
    backgroundColor: '#f06292',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'cheerful',
    label: '开朗',
    description: '面带微笑，精神愉快',
    backgroundColor: '#cddc39',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },

  // 中性情绪 (评分范围：-2~2) - 柔和低调的色系
  {
    type: 'neutral',
    label: '中立',
    description: '没有明显的情绪波动，保持平衡状态',
    backgroundColor: '#9e9e9e',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'thoughtful',
    label: '深思',
    description: '对某些事情进行深入思考和反省',
    backgroundColor: '#5c6bc0',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'curious',
    label: '好奇',
    description: '对未知事物充满探索欲望',
    backgroundColor: '#9575cd',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'confused',
    label: '困惑',
    description: '对某些事情感到不解或迷茫',
    backgroundColor: '#ffcc80',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'pensive',
    label: '沉思',
    description: '陷入思考状态，审视过去或未来',
    backgroundColor: '#90a4ae',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'apathetic',
    label: '冷漠',
    description: '对周围的事情缺乏兴趣',
    backgroundColor: '#bdbdbd',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },

  // 消极情绪 (评分范围：-10~-3) - 阴暗低饱和的色系
  {
    type: 'sad',
    label: '悲伤',
    description: '感到失落或痛苦，情绪低落',
    backgroundColor: '#303f9f',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'anxious',
    label: '焦虑',
    description: '对未来感到不安或担忧',
    backgroundColor: '#d32f2f',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'bored',
    label: '无聊',
    description: '缺乏兴趣或刺激，感到无所事事',
    backgroundColor: '#4e342e',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'tired',
    label: '疲惫',
    description: '感到精力耗尽，需要休息',
    backgroundColor: '#546e7a',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'frustrated',
    label: '沮丧',
    description: '对事情进展不顺感到失望和沮丧',
    backgroundColor: '#c62828',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'lonely',
    label: '孤独',
    description: '感到孤单，缺乏社交联系或支持网络',
    backgroundColor: '#455a64',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'angry',
    label: '愤怒',
    description: '对某些事情感到气愤或生气',
    backgroundColor: '#b71c1c',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'guilty',
    label: '内疚',
    description: '对自己的行为感到悔恨和自责',
    backgroundColor: '#d32f2f',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'hopeless',
    label: '绝望',
    description: '对未来失去希望和信心',
    backgroundColor: '#212121',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'overwhelmed',
    label: '重负',
    description: '感到压力巨大，无法应对',
    backgroundColor: '#424242',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'jealous',
    label: '嫉妒',
    description: '对他人的成功感到羡慕或不满',
    backgroundColor: '#4a148c',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  },
  {
    type: 'insecure',
    label: '不安',
    description: '缺乏安全感，对自己没有信心',
    backgroundColor: '#37474f',
    color: '#ffffff',
    value: 0,
    usageFrequency: 0
  }
])

export const feelingOptions = useLocalStorage('feeling_options', [
  // 身体状态
  {
    type: 'tired',
    label: '疲劳',
    description: '感觉精力耗尽，难以集中注意力，可能需要休息。',
    value: 0,
    backgroundColor: '#d32f2f',
    color: '#ffffff',
    usageFrequency: 0
  }, // 暗红
  {
    type: 'relaxed',
    label: '放松',
    description: '身体轻松，没有压力，心情愉悦。',
    value: 0,
    backgroundColor: '#81c784',
    color: '#ffffff',
    usageFrequency: 0
  }, // 柔和绿
  {
    type: 'weak',
    label: '乏力',
    description: '缺乏力量，行动困难，可能需要补充能量。',
    value: 0,
    backgroundColor: '#ffa726',
    color: '#ffffff',
    usageFrequency: 0
  }, // 浅橙
  {
    type: 'energized',
    label: '活力',
    description: '充满能量，精神饱满，准备迎接挑战。',
    value: 0,
    backgroundColor: '#29b6f6',
    color: '#ffffff',
    usageFrequency: 0
  }, // 鲜亮蓝
  {
    type: 'sleepy',
    label: '困倦',
    description: '想要睡觉，精神不集中，可能需要小憩。',
    value: 0,
    backgroundColor: '#b39ddb',
    color: '#ffffff',
    usageFrequency: 0
  }, // 柔和紫
  {
    type: 'refreshed',
    label: '清爽',
    description: '经过休息或放松后感到焕然一新，精力充沛。',
    value: 0,
    backgroundColor: '#66bb6a',
    color: '#ffffff',
    usageFrequency: 0
  }, // 亮绿

  // 疼痛相关
  {
    type: 'pain',
    label: '疼痛',
    description: '局部或全身感到疼痛，可能影响日常活动。',
    value: 0,
    backgroundColor: '#c62828',
    color: '#ffffff',
    usageFrequency: 0
  }, // 深红
  {
    type: 'sore',
    label: '酸痛',
    description: '肌肉或关节感到不适，常见于运动后。',
    value: 0,
    backgroundColor: '#ff7043',
    color: '#ffffff',
    usageFrequency: 0
  }, // 橙红
  {
    type: 'dizziness',
    label: '头晕',
    description: '感到旋转或站立不稳，需要坐下休息。',
    value: 0,
    backgroundColor: '#7986cb',
    color: '#ffffff',
    usageFrequency: 0
  }, // 柔蓝

  // 温度与湿度
  {
    type: 'cold',
    label: '寒冷',
    description: '身体发冷，可能伴随寒颤，需要保暖。',
    value: 0,
    backgroundColor: '#42a5f5',
    color: '#ffffff',
    usageFrequency: 0
  }, // 冷蓝
  {
    type: 'hot',
    label: '炎热',
    description: '身体发热并可能流汗，需要降温或喝水。',
    value: 0,
    backgroundColor: '#ffb74d',
    color: '#ffffff',
    usageFrequency: 0
  }, // 橙黄
  {
    type: 'dryness',
    label: '干燥',
    description: '皮肤或喉咙感到干涩，可能需要补水或润肤。',
    value: 0,
    backgroundColor: '#ffee58',
    color: '#000000',
    usageFrequency: 0
  }, // 明黄
  {
    type: 'sweaty',
    label: '出汗',
    description: '身体大量出汗，感到潮湿，需要换衣服或降温。',
    value: 0,
    backgroundColor: '#64b5f6',
    color: '#ffffff',
    usageFrequency: 0
  }, // 亮蓝

  {
    type: 'hunger',
    label: '饥饿',
    description: '需要进食，感到胃空，有进食的冲动。',
    value: 0,
    backgroundColor: '#ffe082',
    color: '#000000',
    usageFrequency: 0
  }, // 浅黄橙
  {
    type: 'fullness',
    label: '饱胀',
    description: '吃太多后胃部不适，需要消化时间。',
    value: 0,
    backgroundColor: '#ffd54f',
    color: '#000000',
    usageFrequency: 0
  }, // 亮橙

  // 舒适度
  {
    type: 'comfortable',
    label: '舒适',
    description: '身体状态良好，没有不适，可以放松心情。',
    value: 0,
    backgroundColor: '#81c784',
    color: '#ffffff',
    usageFrequency: 0
  }, // 柔和绿
  {
    type: 'uncomfortable',
    label: '不适',
    description: '整体感觉不舒服或有异常，需要关注身体信号。',
    value: 0,
    backgroundColor: '#e0e0e0',
    color: '#000000',
    usageFrequency: 0
  }, // 灰白
  {
    type: 'restless',
    label: '不安',
    description: '感觉无法静坐或放松，需要活动一下来缓解压力。',
    value: 0,
    backgroundColor: '#ffee58',
    color: '#000000',
    usageFrequency: 0
  }, // 明黄

  // 不确定的感觉
  {
    type: 'indifferent',
    label: '无所谓',
    description: '对当前状态没有明显的积极或消极感受，可以继续进行日常活动。',
    value: 0,
    backgroundColor: '#9e9e9e',
    color: '#ffffff',
    usageFrequency: 0
  } // 中性灰
])

/**
 * @description 运气等级 从 1 - 9
 */
export const luckOptions = [
  {
    level: 1,
    title: '非常差',
    description: '您最近的运气似乎非常差，或许尝试换换生活方式'
  }
]

export const vitalityOptions = []

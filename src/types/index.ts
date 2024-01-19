export interface BouquetInfo {
  description: string | null
  dDay: string | null
  bouquetDesign: {
    wrapper: string
    ribbon: string
    item1: string | undefined
    item2: string | undefined
    item3: string | undefined
  }
  bouquets: {
    bouquetId: number
    flowers: {
      flowerId: number
      sender: string
      flowerType: string
    }[]
  }[]
}

interface LetterSent {
  flowerId: 0
  receiver: 'string'
  letterType: 'string'
}

export interface LetterSentInfo {
  letterSentResponse: LetterSent[]
}

export interface FlowerInfo {
  flowerResponse: {
    letter: 'string'
    flowerType: 'string'
    cardType: 'string'
  }
}
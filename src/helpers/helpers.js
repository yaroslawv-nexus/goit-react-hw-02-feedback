export function getTotalSum() {
    
    const numbers = [...arguments];
    
   
    let total = 0;
   
    for (const number of numbers) {
        total += number;
    }
    
    return total;
}

export function countPositiveFeedbackPercentage(good, total) {
    if (good === 0) {
      return 0;
    }
    const result = (good / total) * 100;
    return Math.round(result);
}
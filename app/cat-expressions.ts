export type CatExpression = "neutral" | "curious" | "pout" | "wink" | "cheeky" | "surprised" | "happy" | "sleepy";
export type CatReaction = { expression: CatExpression; until: number };

const EXPRESSIONS: { expression: CatExpression; duration: number }[] = [
  { expression: "curious", duration: 2400 },
  { expression: "wink", duration: 1500 },
  { expression: "pout", duration: 2300 },
  { expression: "cheeky", duration: 2200 },
  { expression: "surprised", duration: 1600 },
  { expression: "happy", duration: 2200 },
];

export const CAT_REPLIES: Record<CatExpression, string> = {
  neutral: "喵～",
  curious: "嗯？在看什么呀",
  pout: "哼～再摸一下嘛",
  wink: "偷偷给你比个心 ♡",
  cheeky: "嘿嘿，被我逗到了吧",
  surprised: "诶！是叫我吗？",
  happy: "好喜欢你呀 ♡",
  sleepy: "呼噜……",
};

// Facial expressions have their own clock; scrolling and destinations never reset it.
export function createExpressionController(startedAt: number, random = Math.random) {
  let expression: CatExpression = "neutral";
  let until = 0;
  let nextAt = startedAt + 1100;
  let index = 0;

  return (now: number, mood: string, reaction: CatReaction | null): CatExpression => {
    if (mood === "sleep") return "sleepy";
    if (mood === "love") return reaction && now < reaction.until ? reaction.expression : "happy";
    if (mood === "roll" || mood === "stretch") return "happy";
    if (mood === "pounce") return "surprised";
    if (reaction && now < reaction.until) return reaction.expression;

    if (expression !== "neutral" && now >= until) {
      expression = "neutral";
      nextAt = now + 2600 + random() * 1800;
    }
    if (now >= nextAt) {
      const next = EXPRESSIONS[index++ % EXPRESSIONS.length];
      expression = next.expression;
      until = now + next.duration;
      nextAt = Infinity;
    }
    return expression;
  };
}

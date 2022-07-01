export const decr = () => ({ type: "DECREMENT" });
export const incr = () => ({ type: "INCREMENT" });
export const res = () => ({ type: "RESET" });
export const rand = () => ({
  type: "RANDOM",
  payload: Math.floor(Math.random() * 10) + 1,
});

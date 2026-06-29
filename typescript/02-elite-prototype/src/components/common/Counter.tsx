import { useCounterStore } from '@/stores/counterStore'

const Counter = () => {
  const { count, increment, decrement, reset } = useCounterStore()
  return (
    <div className="flex items-center gap-4">
      <button onClick={decrement} className="btn">-</button>
      <span className="text-xl">{count}</span>
      <button onClick={increment} className="btn">+</button>
      <button onClick={reset} className="btn-secondary">Reset</button>
    </div>
  )
}
export default Counter
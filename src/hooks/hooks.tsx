import { useContext } from 'react'
import { StoreContext, Ctx } from '../redux/context'
import { useLocation } from 'react-router-dom'

export const useQuery = (): URLSearchParams => new URLSearchParams(useLocation().search)
export const useStoreCtx = (): Ctx => {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('color provider not exist');
  return ctx;
}
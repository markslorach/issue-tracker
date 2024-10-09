import { PropsWithChildren } from "react"

const ErrorMessage = ({children}: PropsWithChildren) => {
  return (
    <span className="text-red-500 text-sm">{children}</span >
  )
}

export default ErrorMessage
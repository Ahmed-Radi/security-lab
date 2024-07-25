import { AlertCircle } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

interface ICustomAlert {
  title: string;
  message: string;
}
export function CustomAlert({ title, message }: ICustomAlert) {
  return (
    <Alert variant={`${title.toLowerCase() === "error" ? "destructive" : "default"}`}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {message}
      </AlertDescription>
    </Alert>
  )
}

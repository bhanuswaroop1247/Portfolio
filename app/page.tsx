import HomePage from "./HomePage"
import data from "@/data.json"

export default function Page() {
  return <HomePage data={data as any} />
}

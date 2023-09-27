import { Step1 } from "./pages/Step1"
import { Step2 } from "./pages/Step2"
import { Step3 } from "./pages/Step3"
import 'tailwindcss/tailwind.css';
import './globals.css';

export default function Home() {
  return (
  <div>
    <div>
      <h1>Welcome to Step1</h1>
      <Step1 />
      {/* <h1>Welcome to Step2</h1> */}
      {/* <Step2 /> */}
    </div>
    </div>
  )
}

import * as React from "react"
import { ReviewInterface } from "@/interface/review.interface"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
export function Review() {


  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Review Course</CardTitle>
        <CardDescription>Software Engineer</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="RATING">Rating</Label>
              <Input id="RATING" type="number" min = "0" max = "10" />
            </div>
            
            <Textarea htmlFor="MESSAGE" placeholder="Review here" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Review</Button>
      </CardFooter>
    </Card>
    </div>
  )
}
export default Review;
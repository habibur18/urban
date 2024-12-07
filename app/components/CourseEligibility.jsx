import { CheckCircle2 } from "lucide-react";
import { hindSiliguri } from "../layout";

const eligibilityPoints = [
  {
    text: "কোন লেভেল নলেজ নেই কিন্তু এসএসসি তাটা থেকে মিনিমাম ইংরাজি ও ডিসিশন নিতে চান",
  },
  {
    text: "বিজনেস এ ডাটা এনালিটিক্স তৈরিতে যারা কাজ করতে চান",
  },
  {
    text: "যোকোন ব্যাকগ্রাউন্ডের ইউন্টে যিনি ডাটা সায়েন্সে ক্যারিয়ার গড়তে চান",
  },
  {
    text: "যার আগ্রহ এবং যারা চাকরির ডাটা সায়েন্স সেইটের ক্যারিয়ার শুরু করতে",
  },
];

export default function CourseEligibility() {
  return (
    <section
      className={`w-full max-w-7xl mx-auto px-4 py-16 ${hindSiliguri.className}`}
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        কোর্সটি আপনারই জন্য
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {eligibilityPoints.map((point, index) => (
          <div
            key={index}
            className="flex items-start gap-3 shadow-lg py-2 px-2"
          >
            <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
            <p className="text-lg">{point.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

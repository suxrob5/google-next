import { Toaster, toast } from "sonner";

export default function SoonerDemo() {
  return (
    <div>
      <Toaster />
      <button onClick={() => toast.success("Ярлык изменен")}>Готово</button>
    </div>
  );
}

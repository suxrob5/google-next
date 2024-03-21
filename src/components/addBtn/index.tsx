import { Button } from "@/components/ui/button";
import { Button as Button2 } from "@/components/ui/button2";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type EditProps = {
  inputValue: string;
  handleAddTodo: () => void;
  handleInputUlr: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputULR: string;
};

const AddBtn: React.FC<EditProps> = ({
  inputValue,
  handleAddTodo,
  inputULR,
  handleInputUlr,
  handleInputChange,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button2
          variant="outline"
          className="hover:bg-opacity-0 bg-opacity-0 border-none bg-red-500 hover:bg-red-500 h-[150px] cursor-pointer"
        >
          <div className="hover:bg-black hover:bg-opacity-20 relative rounded-xl w-[130px] h-[150px]">
            <div className="rounded-lg">
              <div className="flex items-center justify-center mt-10">
                <Button
                  variant="outline"
                  className="bg-[#3B407FFF] hover:bg-[#33376e] rounded-full border-none text-3xl h-[50px] w-[50px] text-white hover:text-white"
                >
                  +
                </Button>
              </div>
              <p className="text-xl text-white font-[500] text-center mt-5">
                Добавить я...
              </p>
            </div>
          </div>
        </Button2>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Добавить ярлык</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Название
            </Label>
            <Input
              id="name"
              className="col-span-3"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              URL
            </Label>
            <Input
              id="username"
              className="col-span-3"
              value={inputULR}
              onChange={handleInputUlr}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={handleAddTodo}>
              Готово
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddBtn;

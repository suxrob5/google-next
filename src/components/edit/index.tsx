import { Button as Button2 } from "@/components/ui/button2";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Todo {
  id: number;
  text: string;
  ulr: string;
  isHovered: boolean;
}

type EditProps = {
  handleEdit: (id: number, text: string, url: string) => void;
  item: Todo;
  handleURLChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSaveEdit: (id: number) => void;
  handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  editedText: string;
  editedURL: string;
};

const Edit: React.FC<EditProps> = ({
  handleEdit,
  item,
  handleURLChange,
  handleSaveEdit,
  handleTextChange,
  editedText,
  editedURL,
}) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button2
            variant="outline"
            className=" border-none relative flex cursor-default select-none items-center justify-start rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            onClick={() => handleEdit(item.id, item.text, item.ulr)}
          >
            Изменить ярлык
          </Button2>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Изменить ярлык</DialogTitle>
            <DialogDescription>
              <span className="text-white">.</span>
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Название
              </Label>
              <Input
                id="name"
                value={editedText}
                onChange={handleTextChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                URL
              </Label>
              <Input
                id="username"
                value={editedURL}
                onChange={handleURLChange}
                className="col-span-3"
              />
            </div>
          </div>
          <div className="relative pb-10">
            <DialogClose>
              <Button
                type="submit"
                className=" absolute right-0"
                onClick={() => handleSaveEdit(item.id)}
              >
                Готово
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Edit;

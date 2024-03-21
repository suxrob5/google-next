import React, { useState } from "react";
import Image from "next/image";
// shadcn
import { Button as Button2 } from "@/components/ui/button2";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import classNames from "classnames";
//images
import Menu3xs from "../../assets/menu3x.png";
import Edit from "../edit";
import AddBtn from "../addBtn";

function Add() {
  interface Todo {
    id: number;
    text: string;
    ulr: string;
    isHovered: boolean;
  }

  const [add, setAdd] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [inputULR, setInputULR] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [inputValueDef, setInputValueDef] = useState("");
  const [inputULRDef, setInputULRDef] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "" && inputULR.trim() !== "") {
      const addLocal: Todo = {
        id: Date.now(),
        text: inputValue,
        ulr: inputULR,
        isHovered: isHovered,
      };

      localStorage.setItem("link", JSON.stringify(addLocal));
      type linkType = {
        id: number;
        text: string;
        ulr: string;
        isHovered: boolean;
      };
      const link: linkType = JSON.parse(localStorage.getItem("link") as string);

      const newAdd: Todo = {
        id: link?.id,
        text: link?.text,
        ulr: link?.ulr,
        isHovered: link?.isHovered,
      };

      setAdd([...add, newAdd]);
      setInputValue("");
      setInputULR("");

      add.map((item) => setInputValueDef(item.text));
      add.map((item) => setInputULRDef(item.ulr));
    }
  };

  const handleDeleteAdd = (id: number) => {
    const updatedAdd = add.filter((item) => item.id !== id);
    setAdd(updatedAdd);
  };

  const handleMouseEnter = (id: number) => {
    const updatedAdd = add.map((item) =>
      item.id === id ? { ...item, isHovered: true } : item,
    );
    setAdd(updatedAdd);
  };

  const handleMouseLeave = (id: number) => {
    const updatedAdd = add.map((item) =>
      item.id === id ? { ...item, isHovered: false } : item,
    );
    setAdd(updatedAdd);
  };
  //  EDIt------------------------------------------------------------------------------------------------
  const [editedText, setEditedText] = useState("");
  const [editedURL, setEditedURL] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  const handleURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedURL(e.target.value);
  };

  const handleEdit = (id: number, text: string, ulr: string) => {
    setEditedText(text);
    setEditedURL(ulr);
  };

  const handleSaveEdit = (id: number) => {
    const updatedAdd = add.map((item) =>
      item.id === id ? { ...item, text: editedText, ulr: editedURL } : item,
    );
    setAdd(updatedAdd);
  };

  const handleInputUlr = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputULR(e.target.value);
  };
  return (
    <div>
      <div className="w-[600px] mx-auto flex flex-wrap items-center justify-center">
        {add.map((item) => (
          <div key={item.id} className="relative">
            <a href={item.ulr}>
              <div
                className={`hover:bg-black hover:bg-opacity-20 relative rounded-xl w-[130px] h-[150px]`}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave(item.id)}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button2 className="right-0 absolute bg-opacity-0 bg-slate-50 hover:bg-opacity-0 hover:bg-slate-50">
                      <button
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={() => handleMouseLeave(item.id)}
                        onClick={() => alert("ssss")}
                        className={classNames(
                          "absolute right-0 top-2 hover:bg-black rounded-full",
                          {
                            hidden: !item.isHovered,
                          },
                        )}
                      >
                        <Image
                          onMouseEnter={() => handleMouseEnter(item.id)}
                          onMouseLeave={() => handleMouseLeave(item.id)}
                          src={Menu3xs}
                          alt="menu3x"
                          className="w-[30px]"
                        />
                      </button>
                    </Button2>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <Edit
                        item={item}
                        editedURL={editedURL}
                        handleEdit={handleEdit}
                        editedText={editedText}
                        handleSaveEdit={handleSaveEdit}
                        handleURLChange={handleURLChange}
                        handleTextChange={handleTextChange}
                      />
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => handleDeleteAdd(item.id)}
                      >
                        <span>Удалить</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                  </DropdownMenuContent>
                </DropdownMenu>
                <div className="rounded-lg">
                  <div className="flex items-center justify-center">
                    <Avatar className="bg-[#3B407FFF] h-[50px] w-[50px] mt-10 text-xl font-[500]">
                      <AvatarFallback>
                        {item.text.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <h1 className="text-xl text-white text-center mt-5">
                    {item.text}
                  </h1>
                </div>
              </div>
            </a>
          </div>
        ))}
        <AddBtn
          inputULR={inputULR}
          handleInputUlr={handleInputUlr}
          inputValue={inputValue}
          handleAddTodo={handleAddTodo}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default Add;

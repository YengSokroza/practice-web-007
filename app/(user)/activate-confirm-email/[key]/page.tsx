import {ConfirmIcon } from "@/components/icons/FontAwesome"

type PropsParam = {
	params: {
		key: string;
	};
	searchParams: any;
};

import style from "./style.module.css";
import Button from "./components/Button";


export default function ConfirmEmail(props: PropsParam) {
  
  return (
    <main >

        {/* Confirm Email Card */}
      <section className={style.container}>
            {/* icon confirm */}
            <ConfirmIcon color="#080" classname="h-32 w-32 mb-8"/>
            {/* Title */}
            <h1 className="text-5xl my-4 font-semibold">Email has been Confirmed!</h1>
            {/* Description */}
            <p className="text-2xl my-2">
					Your email has been verified! you can go to login page by press below button! 🚀💫
				  </p>
          <p className="text-2xl">
					អ៊ីម៉ែលរបស់អ្នកបានផ្ទៀងផ្ទាត់ជោគជ័យ! សូមចុចប៉ូតុងខាងក្រោមដើម្បីចូលទៅកម្មវិធី 🚀💫
				  </p>
          <div className="flex gap-4" >
            <Button title="Cancel" classname="bg-gray-50 text-gray-800 my-8"/>
            <Button title="Login" classname="my-8"/>
          </div>
          

        </section>  
    </main>
  )
}

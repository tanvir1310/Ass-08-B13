"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    console.log({ data, error });

    if (!error) {
      router.push("/");
    }
  };

  return (
    // Mobile responsive wrapper
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      {/* Fixed w-125 change kore responsive max-w-md kora hoyeche */}
      <Card className="w-full max-w-[480px] border p-6 md:p-10 shadow-sm">
        <h1 className="text-center text-2xl font-bold mb-8">Sign Up</h1>

        {/* w-96 fixed width bad diye w-full kora hoyeche */}
        <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
          <TextField isRequired name="name" type="text" className="w-full">
            <Label>Name</Label>
            <Input placeholder="Enter your name" variant="bordered" />
            <FieldError />
          </TextField>

          <TextField isRequired name="image" type="text" className="w-full">
            <Label>Image URL</Label>
            <Input placeholder="Image URL" variant="bordered" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" variant="bordered" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className="w-full"
            validate={(value) => {
              if (value.length < 8)
                return "Password must be at least 8 characters";
              if (!/[A-Z]/.test(value))
                return "Password must contain at least one uppercase letter";
              if (!/[0-9]/.test(value))
                return "Password must contain at least one number";
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" variant="bordered" />
            <Description className="text-xs">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          {/* Button Layout: Mobile-e stacked (niche niche), Tablet/Desktop-e pashapashi */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            {/* Submit: Blue/Primary */}
            <Button
              type="submit"
              color="primary"
              className="w-full sm:flex-1 h-12 text-md font-bold shadow-lg"
            >
              <Check className="text-lg" />
              Submit
            </Button>

            {/* Reset: Subtle Gray/Flat */}
            <Button
              type="reset"
              variant="flat"
              className="w-full sm:flex-1 h-12 text-md font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200"
            >
              Reset
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}

import { z, TypeOf } from "zod";

// export const userlogin = z.object({
//   body: z.object({
//     email: z.string()
//     .email({ message: "Invalid email address" }),
// // ,
// //     password: z.string({
// //       required_error: "password is required",
// //       invalid_type_error: "password must be a Number and String",
// //     }) 
//     password: z.string()
//       .min(5, { message: "Must be 5 or more characters long" }),

//   }),
// });






// export type userlogin = TypeOf<typeof userlogin>["body"];




export const userVaild = z.object({
    body:z.object({
        password :z.string()
  .min(5, { message: "يجب ان تكون كلمة السر اكثر من 5 احرف او ارقام" }),
  email :z.string().email({ message : 'Please enter your email address'}),
}),
});

export type userVaild = TypeOf<typeof userVaild>["body"];






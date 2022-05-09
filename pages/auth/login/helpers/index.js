export const phoneValidation = {
    required: { value: true, message: "ველის მითითება სავალდებულოა!" },
    pattern: {
      value: /^(0|[1-9]\d*)(\.\d+)?$/,
      message: "შეიყვანეთ მხოლოდ რიცხვები!",
    },
    minLength: {
      value: 9,
      message: "მობილურის უნდა შეიცავდეს 9 სიმბოლოს!",
    },
    maxLength: {
      value: 9,
      message: "მობილურის უნდა შეიცავდეს 9 სიმბოლოს!",
    },
  }



  export const passwordValidation = {
        required: {
          value: true,
          message: "ველის მითითება სავალდებულოა!",
        },
        pattern: {
          value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/,
          message:
            "პაროლი უნდა შეიცავდეს დიდ-პატარა ასოებს და ციფრებს, მინიმალური სიგრძე 6 სიმბოლო!",
        },
  }

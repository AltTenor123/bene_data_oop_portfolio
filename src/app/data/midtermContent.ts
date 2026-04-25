export const midtermContent: Record<string, {
  pdfUrl?: string;
  code?: string;
  reflection: string;
}> = {
  act1: {
    pdfUrl: '/pdfs/activity1.pdf',
    code: `public class Activity1 {

    static class Student {
        String name;
        int grade;

        Student(String n, int g) {
            name = n;
            grade = g;
        }
    }

    public static void main(String[] args) {

        Student s1 = new Student("John", 85);
        Student s2 = new Student("Maria", 90);
        Student s3 = s2;

        s1.grade = 95;
        s3.name = "Ana";

        System.out.println(s1.name + " " + s1.grade);
        System.out.println(s2.name + " " + s2.grade);
        System.out.println(s3.name + " " + s3.grade);
    }
}`,
    reflection: "It was my first time to actually implement a Java Code for an Assignment, I had my first experience in Java Coding way back before 1st year, and its different in training programming and during ang actually programming. Still it was still fun and I was able to remember the lessons that I learned before my 1st year and after the lesson with our prof."
  },
  act2: {
    pdfUrl: '/pdfs/activity2.pdf',
    code: `public class Act2_Part1 {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 15;

        boolean a = (num1 & num2) != 0;  // 10 & 15 is 10 which is != 0, result true
        int b = num1 & num2;             // 10 & 15 is 10, result: 10
        boolean c = (num1 | num2) != 15; // 10 | 15 is 15 which is not != 15, result false
        int d = num1 | num2;             // 10 | 15 is 15, result: 15

        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
        System.out.println(d);
    }
}

public class Act2_Part2 {
        public static void main(String[] args) {
        int num1 = 20;
        int num2 = 35;

        boolean less_boolean = (num1 < num2) ? true : false;    // num1 is less than num2, result: true
        boolean greater_boolean = (num1 > num2) ? true : false; // num1 is not greater than num2, result: false
        int less_int = (num1 < num2) ? num1 : num2;             // num1 is less than num2, result: 20
        int greater_int = (num1 > num2) ? num1 : num2;          // num1 is not greater than num2, result: 35

        System.out.println(less_boolean);
        System.out.println(greater_boolean);
        System.out.println(less_int);
        System.out.println(greater_int);
    }
}


public class Act2_Part3 {
    public static void main(String[] args) {

        int addition = 95;
        int subtraction = 95;
        int multiplication = 12;
        int division = 48;

        addition += 25;       // 95 + 25 = 120
        subtraction -= 25;    // 95 - 25 = 70
        multiplication *= 12; // 12 * 12 = 144
        division /= 3;        // 48 / 3 = 16

        System.out.println("Addition: " + addition);
        System.out.println("Subtraction: " + subtraction);
        System.out.println("Multiplication: " + multiplication);
        System.out.println("Division: " + division);
    }
}
public class Act2_PartII{

    int num_result;
    boolean boolean_result;

    public void print_int(){
        System.out.println(num_result);
    }

    public void print_boolean(){
        System.out.println(boolean_result);
    }

    public static void main(String[] args){
        int num1 = 1200;
        int num2 = 35;

        Act2_PartII obj = new Act2_PartII();


        obj.num_result = num1 / 20;
        obj.print_int(); // Output: 60 (1200 / 20 = 60)


        obj.num_result = num2 *= 2;
        obj.print_int(); // Output: 70 (35 * 2 = 70)

        obj.num_result = (num2 != num1) ? 6 : 9;
        obj.print_int();
        // Output: 6 (ternary — num2 is 70, num1 is 1200, 70 != 1200 so returns 6)

        obj.num_result = (num1 > num2) ? 7 : 3;
        obj.print_int();
        // Output: 7 (ternary — num1 > num2 is true, so returns 7)

        obj.boolean_result = (num1 > 0) && (num2 > 0);
        obj.print_boolean();
        // Output: true (logical — num1 > 0 AND num2 > 0)

        obj.boolean_result = (num1 < num2);
        obj.print_boolean();
        // Output: false (num1 1200 is NOT > num2 1200... num1 > num2 is false since num2=70 < num1=1200)

    }

}`,
    reflection: "On this activity, it felt like an easy task since some syntax is kinda similar to C programming language. Even though, I still encounter minor errors that in still the learnings on this activity."
  },
  act3: {
    pdfUrl: '/pdfs/activity3.pdf',
    code: `import java.util.*;
public class SimpleWalletGomez {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int balance = 3000;
        int mode = 0;
        int transaction_count = 0;
        boolean status = true;

        while(status){
            System.out.println("\\n===== WALLET MENU =====");
            System.out.println("1. View Balance");
            System.out.println("2. Add Money");
            System.out.println("3. Spend Money");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");
            mode = input.nextInt();
            System.out.print("\\n");

            switch (mode) {
                case 1:
                    System.out.println("Your current balance is: " + balance + " pesos");
                    ++transaction_count;
                break;

                case 2:
                    System.out.print("Enter amount to add: ");
                    int add_amount = input.nextInt();

                    if (add_amount > 0) {
                        balance += add_amount;
                        System.out.println("Money added successfully! \\nNew Balance: " + balance + " pesos");
                        ++transaction_count;
                    }
                    else {
                        System.out.println("Invalid amount");
                    }
                break;

                case 3:
                    System.out.print("Enter amount to spend: ");
                    int spend_amount = input.nextInt();

                    if (spend_amount > 1000) {
                        System.out.println("Exceeds maximum spend per transaction of 1,000 pesos");
                    }

                    else if (spend_amount > balance) {
                        System.out.println("Insufficient balance");
                    }

                    else if (spend_amount <= 0) {
                        System.out.println("Invalid amount");
                        }

                    else {
                        balance -= spend_amount;
                        System.out.println("Money spent successfully! \\nNew Balance: " + balance + " pesos");
                        ++transaction_count;
                        }
                break;

                case 4:
                    System.out.println("Total Successful Transactions: "+ transaction_count);
                    System.out.println("Exiting Program... ");
                    input.close();
                    status = false;
                break;

                default:
                    System.out.println("Error on entering your choice, please enter number from 1 to 4 only ");
                break;
            }
        }
    }
}`,
    reflection: "This activity is familiar to me since I was able to do this on my personal activity last year. It still become difficult because I use other programming language but I learned a lot with this activity."
  },
  act4: {
    pdfUrl: '/pdfs/activity4.pdf',
    code: `public class GradeEvaluationGomez {
    public static void main(String[] args) {
        double prelim = 85;
        double midterm = 78;
        double finals = 90;

        double average = (prelim + midterm + finals) / 3;
        String remark;

        System.out.println("Your Prelim Grade is " + prelim);
        System.out.println("Your Midterm Grade is " + midterm);
        System.out.println("Your Finals Grade is " + finals);

        System.out.printf("\\nYour Average Grade is: %.2f\\n", average);
        if (average >= 90 && average <= 100){
            remark = "Excellent";
        }
        else if(average >= 80 && average <= 89){
            remark = "Good";
        }
        else if(average >= 75 && average <= 79){
            remark = "Fair";
        }
        else{
            remark = "Failed";
        }

        System.out.println("Your Remark is " + remark);
    }
}`,
    reflection: "I find this activity very related to me since I do compute my grades and I was able to understand this activity based on the actual implementation and purpose based on the requirement and the realistic application."
  },
  act5: {
    pdfUrl: '/pdfs/activity5.pdf',
    code: `import java.util.Scanner;

public class ExpenseTrackerGomez {
    public static void title(){
        System.out.println("=============================");
        System.out.println("       EXPENSE TRACKER       ");
        System.out.println("                             ");
        System.out.println("By:   Dean Benedict Gomez    ");
        System.out.println("from: BSIT 2-1               ");
        System.out.println("=============================\\n");
    }

    public static int calculate_expense(int food, int transpo, int other_expense) {
        int total = food + transpo + other_expense;

        return total;
    }

    public static String budget_checker(int expense, int budget ){
        if (expense == budget) {
            return "NEUTRAL. Your budget and expense are equal.";
        } else if (expense < budget) {
            return "GOOD. You are within budget. Keep it up!";
        } else {
            return "BAD. Your expense exceeds your budget!";
        }
    }

    public static void status(int total_expense, String budget_status){
        System.out.println("\\nYour Total Expense is           : " + total_expense);
        System.out.println("Your Budget Status is           : " + budget_status);
    }

    public static void main(String[ ] args){
        int food_exp = 0;
        int transpo_exp = 0;
        int other_exp = 0;
        int budget = 0;
        int total_expense = 0;
        String budget_status;
        Scanner input = new Scanner(System.in);

        title();

        System.out.print("Input Food Expense            : ");
        food_exp = input.nextInt();

        System.out.print("Input Transportation Expense  : ");
        transpo_exp = input.nextInt();

        System.out.print("Input Other Expense           : ");
        other_exp = input.nextInt();

        System.out.print("\\nInput Budget                  : ");
        budget = input.nextInt();

        total_expense = calculate_expense(food_exp, transpo_exp, other_exp);
        budget_status = budget_checker(total_expense, budget);

        status(total_expense, budget_status);

        input.close();
    }

}`,
    reflection: "This activity is very new to me, especially when it comes to Java, and this activity is one of the essential lesson for Object Oriented Programming. In this way I fully understand the purpose of modularity and reusability of functions or methods in Java."
  },
  sw1: {
    reflection: "This seatwork introduced logical and binary operators, along with prefix and postfix increment and decrement. It was challenging at first due to my unfamiliarity with short-circuit evaluation, but the activity helped me understand how Java stops evaluating conditions once the result is already determined."
  },
  sw2: {
    pdfUrl: '/pdfs/seatwork2.pdf',
    code: `import java.util.*;

public class ATMTransactionCounterGomez {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        int balance = 8000;
        int mode = 0;
        int transaction_count = 0;
        boolean status = true;

            while(status){
                System.out.println("\\n===== ATM MENU =====");
                System.out.println("1. Check Balance");
                System.out.println("2. Deposit");
                System.out.println("3. Withdraw");
                System.out.println("4. Exit");
                System.out.print("Enter your choice: ");
                mode = input.nextInt();
                System.out.print("\\n");

            switch (mode) {
                case 1:
                    System.out.println("Your current balance is: " + balance + " pesos");
                    ++transaction_count;
                 break;

                 case 2:
                    System.out.print("Enter deposit amount: ");
                    int deposit_amount = input.nextInt();

                    if (deposit_amount > 0) {
                        balance += deposit_amount;
                        System.out.println("Deposit successful! \\nNew Balance: " + balance + " pesos");
                    }

                    else {
                        System.out.println("Invalid deposit amount");
                    }

                        ++transaction_count;
                    break;

                    case 3:
                        System.out.print("Enter withdrawal amount: ");
                        int withdraw_amount = input.nextInt();
                        if (withdraw_amount > 2000) {
                            System.out.println("Exceeds maximum withdrawal limit of 2,000 pesos");
                        }
                        else if (withdraw_amount > balance) {
                            System.out.println("Insufficient funds");
                        }
                        else if (withdraw_amount <= 0) {
                            System.out.println("Invalid withdrawal amount");
                        }
                        else {
                            balance -= withdraw_amount;
                            System.out.println("Withdrawal successful! \\nNew Balance: " + balance + " pesos");
                        }
                        ++transaction_count;
                    break;

                    case 4:
                        System.out.println("Total Transaction Count: "+ transaction_count);
                        System.out.println("Exiting Program... ");
                        input.close();
                        status = false;
                    break;

                    default:
                        System.out.println("Error on entering your choice, please enter number from 1 to 4 only ");
                    break;


                }
            }
    }
}`,
    reflection: "This seatwork introduced logical and binary operators, along with prefix and postfix increment and decrement. It was challenging at first due to my unfamiliarity with short-circuit evaluation, but the activity helped me understand how Java stops evaluating conditions once the result is already determined."
  },
  sw3: {
    pdfUrl: '/pdfs/seatwork3.pdf',
    code: `import java.util.Scanner;

public class StudentAgeAnalyzerGomez {

    public static String categorize_age(int age) {
        if (age >= 0 && age <= 12) {
            return "Child";
        }
        else if (age >= 13 && age <= 19) {
            return "Teenager";
        }
        else if (age >= 20 && age <= 59) {
            return "Adult";
        }
        else {
            return "Senior Citizen";
        }
    }

    public static void main(String[] args){
        int student_age;
        String category;
        String student_name;

        Scanner input = new Scanner(System.in);
        System.out.println("Greetings, Welcome to Student Age Analyzer\\n");

        System.out.print("Enter Student Name: ");
        student_name = input.nextLine();

        System.out.print("Enter Student's age: ");
        student_age = input.nextInt();

        category = categorize_age(student_age);
        System.out.println("The age category of " + student_name + " is " + category);

        input.close();
    }
}`,
    reflection: "This seatwork demonstrated how methods organize code and how control flow statements handle decision-making. It reinforced accepting and processing user input based on conditions, and served as a practical example of applying OOP principles to write structured and maintainable code."
  },
  quiz1: {
    reflection: "This quiz provided a brief introduction to OOP concepts and Java's role as one of the most widely used object-oriented programming languages. It also touched on the history of Java and some of its basic programming structures."
  },
  quiz2: {
    reflection: "This quiz tested my memorization about Java Concepts, the basics, statements, control flow, methods, and input, which enables me to know the things that I need to train more. In this way, it enables me to identify the things that I need to focus on and in that way I'll get to improve myself more."
  },
  exam1: {
    reflection: "Finally, the midterm examination showcase the overall learning that I get for this mid semester, in this way I was able to test my knowledge and understand the things that I need to learn more. The exam was well-structured and effectively reinforced basic OOP concepts. Overall, it was an enjoyable experience."
  }
};

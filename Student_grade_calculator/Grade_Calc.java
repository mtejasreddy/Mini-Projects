import java.util.Scanner;
import java.io.FileWriter;
import java.io.IOException;

public class Grade_Calc {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter student name: ");
        String name = sc.nextLine();

        System.out.println("Enter number of subjects: ");
        int n = sc.nextInt();

        int[] marks = new int[n];
        int total = 0;

        for (int i = 0; i < n; i++) {
            System.out.print("Enter marks for subject " + (i + 1) + ": ");
            marks[i] = sc.nextInt();
            total += marks[i];
        }

        double average = (double) total / n;

        char grade;
        if (average >= 90) {
            grade = 'A';
        } else if (average >= 80) {
            grade = 'B';
        } else if (average >= 70) {
            grade = 'C';
        } else if (average >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        System.out.println("\n--- Student Report ---");
        System.out.println("Name: " + name);
        System.out.println("Total Marks: " + total);
        System.out.println("Average Marks: " + average);
        System.out.println("Grade: " + grade);

        try {
            FileWriter writer = new FileWriter("student_report.txt");
            writer.write("Name: " + name + "\n");
            writer.write("Total marks: " + total + "\n");
            writer.write("Average Marks: " + average + "\n");
            writer.write("Grade: " + grade + "\n");
            writer.close();
            System.out.println("Report saved to student_report.txt");
        } catch (IOException e) {
            System.out.println("Error writing to file.");
        }
        sc.close();
    }
}

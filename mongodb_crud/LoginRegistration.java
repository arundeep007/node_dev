import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
public class LoginRegistration {
    private static Map<String, String> userDatabase = new HashMap<>();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("1. Register");
            System.out.println("2. Login");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    registerUser();
                    break;
                case 2:
                    login();
                    break;
                case 3:
                    System.out.println("Goodbye!");
                    System.exit(0);
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    private static void registerUser() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your ID: ");
        String id = scanner.next();
        System.out.print("Enter your password: ");
        String password = scanner.next();

        if (userDatabase.containsKey(id)) {
            System.out.println("User with this ID already exists. Please choose a different ID.");
        } else {
            userDatabase.put(id, password);
            System.out.println("Registration successful!");
        }
    }

    private static void login() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your ID: ");
        String id = scanner.next();
        System.out.print("Enter your password: ");
        String password = scanner.next();

        if (userDatabase.containsKey(id) && userDatabase.get(id).equals(password)) {
            System.out.println("Login successful!");
        } else {
            System.out.println("Login failed. Please check your ID and password.");
        }
    }
}







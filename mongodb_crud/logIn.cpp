#include <iostream>
#include <fstream>
#include <string>

using namespace std;

struct User {
    string username;
    string password;
};
// Function to register a new user
void registerUser() {
    User newUser;
    newUser.username = "Shelly";
    newUser.password = "shelly.com@";

    // Open the file in append mode to add a new user
    ofstream file("users.txt", ios::app);
    file << newUser.username << " " << newUser.password << endl;
    file.close();
    cout << "Registration successful!" << endl;
}
// Function to check if a user exists in the file
bool doesUserExist(const string& username, const string& password) {
    User user;
    ifstream file("users.txt");
    while (file >> user.username >> user.password) {
        if (user.username == username && user.password == password) {
            return true;
        }
    }
    return false;
}

// Function for user login
void loginUser() {
    string username, password;
    cout << "Enter username: ";
    cin >> username;
    cout << "Enter password: ";
    cin >> password;

    if (doesUserExist(username, password)) {
        cout << "Login successful!" << endl;
    } else {
        cout << "Login failed. Invalid username or password." << endl;
    }
}


int main() {
    int choice;
    while (true) {
        cout << "Choose an option:" << endl;
        cout << "1. Register" << endl;
        cout << "2. Login" << endl;
        cout << "3. Exit" << endl;
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                registerUser();
                break;
            case 2:
                loginUser();
                break;
            case 3:
                cout << "Goodbye!" << endl;
                return 0;
            default:
                cout << "Invalid choice. Try again." << endl;
        }
    }
    return 0;
}
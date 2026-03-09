import java.util.*;

class Book {
    private int id;
    private String title;
    private String author;
    private boolean isIssued;

    public Book(int id, String title, String author) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isIssued = false;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public boolean isIssued() {
        return isIssued;
    }

    public void setIssued(boolean issued) {
        this.isIssued = issued;
    }

    @Override
    public String toString() {
        return id + " - " + title + " by " + author + (isIssued ? " (Issued)" : " (Available)");
    }
}

class Library {
    private ArrayList<Book> books = new ArrayList<>();

    public void addBook(Book book) {
        books.add(book);
        System.out.println("Book added successfully!");
    }

    public void viewBooks() {
        for (Book b : books) {
            System.out.println(b);
        }
    }

    public Book searchBook(int id) {
        for (Book b : books) {
            if (b.getId() == id) {
                return b;
            }
        }
        return null;
    }

    public void issueBook(int id) {
        Book b = searchBook(id);
        if (b != null && !b.isIssued()) {
            b.setIssued(true);
            System.out.println("Book issued successfully!");
        } else {
            System.out.println("Book not available.");
        }
    }

    public void returnBook(int id) {
        Book b = searchBook(id);
        if (b != null && b.isIssued()) {
            b.setIssued(false);
            System.out.println("Book returned successfully!");
        } else {
            System.out.println("Book not found or not issued.");
        }
    }
}

public class LibraryManagementSystem {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Library library = new Library();

        while (true) {
            System.out.println("\n --- Library Management system ---");
            System.out.println("1. Add Book");
            System.out.println("2. View Books");
            System.out.println("3. Issue Book");
            System.out.println("4. Return Book");
            System.out.println("5. Exit");

            System.out.println("Enter your choice: ");
            int choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.println("Enter book id: ");
                    int id = sc.nextInt();
                    sc.nextLine();
                    System.out.println("Enter book title: ");
                    String title = sc.nextLine();
                    System.out.println("Enter book author: ");
                    String author = sc.nextLine();
                    library.addBook(new Book(id, title, author));
                    break;
                case 2:
                    library.viewBooks();
                    break;
                case 3:
                    System.out.println("Enter book id to issur: ");
                    library.issueBook(sc.nextInt());
                    break;
                case 4:
                    System.out.println("Enter book id to return: ");
                    library.returnBook(sc.nextInt());
                    break;
                case 5:
                    System.out.println("Exiting...");
                    sc.close();
                    return;
                default:
                    System.out.println("Invalid choice!");
            }
        }
    }
}

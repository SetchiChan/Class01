import java.io.*;

public class PnNumber2{
  
  public static void main(String [] args) throws IOException{
    
    int number;
    System.out.println("Please input an integer number");
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    number = Integer.parseInt(br.readLine());
    
    if (number > 0) {
      System.out.println("This is a positive number");
    } 
    else if (number < 0) {
      System.out.println("This is a negative number");
    }
    else if (number == 0) {
      System.out.println("This is neither positive nor negative");
    }
  }
}


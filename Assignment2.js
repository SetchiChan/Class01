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

int number;
System.out.println("Please input an interger");
BufferReader br = new BufferedReader(new InputStreamReader(System.in);
                                     
//For integer Inputs                                     
number = Integer.parseInt(br.readLine()); 

//For String Inputs
String name;
name = br.readLine(); 

//For double inputs
Double num;
num = Double.parseDouble(br.readLine());

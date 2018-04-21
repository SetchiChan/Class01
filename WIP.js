import java.io.*;

public class etertainment { 
  public static void main(String [] args) throws IOException{
    
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    
    String answer;
    System.out.println("--[ENTERTAINMENT PROGRAM]--");
    System.out.println("What would you like to watch?");
    System.out.println("Please select an option: 'movie' or 'tv'?");
    answer = br.readLine();
    
    if(answer.equals("tv")){
      System.out.println("Please choose an item from the list below:");
      System.out.println("-news \n- sports \n- sitcoms \n- anime \n- cartoon");
        answer = br.readLine();
      
      if(answer.equals("news")){
        System.out.println("Please select a news channel:");
        System.out.println("- CP24 \n- Good Morning America \n- CBC");
          answer = br.readLine();
        
        if(answer.equals("CP24")){
          System.out.println("You are now watching CP24!");
      
      } 
      else if(answer.equals("sitcoms")){
        System.out.println("You have purchased a cold coffee");}
      else{
        System.out.println("This is not a listed category.");}
      }
    }
  }
}

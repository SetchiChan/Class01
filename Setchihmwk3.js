import java.io.*;

public class EthanHmwk3 { 
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
        System.out.println("- CP24 \n- GoodMorningAmerica \n- CBC");
          answer = br.readLine();
        if(answer.equals("CP24")){
          System.out.println("You are now watching CP24!");} 
      	else if(answer.equals("GoodMorningAmerica")){
        	System.out.println("You are now watching Good Morning America!!");}
        else if(answer.equals("CBC")){
        	System.out.println("You are now watching CBC!");}
        else{
        	System.out.println("This is not a listed show!");}
      }
      
      if(answer.equals("sports")){
        System.out.println("Please select a sports channel:");
        System.out.println("- NBA \n- ESPN \n- MLB");
          answer = br.readLine();
        if(answer.equals("NBA")){
          System.out.println("You are now watching NBA!");} 
      	else if(answer.equals("ESPN")){
        	System.out.println("You are now watching ESPN!");}
        else if(answer.equals("MLB")){
        	System.out.println("You are now watching MLB!");}
        else{
        	System.out.println("This is not a listed show!");}
      }
      
      if(answer.equals("sitcoms")){
        System.out.println("Please select a sitcom channel:");
        System.out.println("- BoredToDeath \n- NurseJackie \n- TheOffice");
          answer = br.readLine();
        if(answer.equals("BoredToDeath")){
          System.out.println("You are now watching Bored To Death!");} 
      	else if(answer.equals("NurseJackie")){
        	System.out.println("You are now watching Nurse Jackie!");}
        else if(answer.equals("TheOffice")){
        	System.out.println("You are now watching The Office!");}
        else{
        	System.out.println("This is not a listed show!");}
      }
      
      if(answer.equals("anime")){
        System.out.println("Please select an anime channel:");
        System.out.println("- Naruto \n- TokyoGhoul \n- AttackOnTitan");
          answer = br.readLine();
        if(answer.equals("Naruto")){
          System.out.println("You are now watching Naruto!");} 
      	else if(answer.equals("TokyoGhoul")){
        	System.out.println("You are now watching Tokyo Ghoul!");}
        else if(answer.equals("AttackOnTitan")){
        	System.out.println("You are now watching Attack On Titan!");}
        else{
        	System.out.println("This is not a listed show!");}
      }
      if(answer.equals("cartoon")){
        System.out.println("Please select a cartoon channel:");
        System.out.println("- Disney \n- CartoonNetwork \n- Nick");
          answer = br.readLine();
        if(answer.equals("Disney")){
          System.out.println("You are now watching Disney!");} 
      	else if(answer.equals("CartoonNetwork")){
        	System.out.println("You are now watching Cartoon Network!");}
        else if(answer.equals("Nick")){
        	System.out.println("You are now watching Nick!");}
        else{
        	System.out.println("This is not a listed show!");}
      }
    }
    
    if(answer.equals("movie")){
      System.out.println("Please choose an item from the list below:");
      System.out.println("-comedy \n- action \n- fiction \n- drama");
        answer = br.readLine();
      
      if(answer.equals("comedy")){
        System.out.println("Please select a movie:");
        System.out.println("- GhostBusters \n- Airplane \n- MrBean");
          answer = br.readLine();
        if(answer.equals("GhostBusters")){
          System.out.println("You are now watching GhostBusters!");} 
      	else if(answer.equals("Airplane")){
        	System.out.println("You are now watching Airplane!");}
        else if(answer.equals("MrBean")){
        	System.out.println("You are now watching Mr Bean!");}
        else{
        	System.out.println("This is not a listed movie!");}
      }
      
      if(answer.equals("action")){
        System.out.println("Please select a movie:");
        System.out.println("- Matrix \n- Looper \n- Terminator");
          answer = br.readLine();
        if(answer.equals("Matrix")){
          System.out.println("You are now watching the Matrix!");} 
      	else if(answer.equals("Looper")){
        	System.out.println("You are now watching the Looper!");}
        else if(answer.equals("Terminator")){
        	System.out.println("You are now watching the Terminator!");}
        else{
        	System.out.println("This is not a listed movie!");}
      }
      
      if(answer.equals("fiction")){
        System.out.println("Please select a movie:");
        System.out.println("- StarWars \n- NurseJackie \n- HungerGames");
          answer = br.readLine();
        if(answer.equals("StarWars")){
          System.out.println("You are now watching Star Wars!");} 
      	else if(answer.equals("Avengers")){
        	System.out.println("You are now watching Avengers!");}
        else if(answer.equals("HungerGames")){
        	System.out.println("You are now watching The Hunger Games!");}
        else{
        	System.out.println("This is not a listed movie!");}
      }
      
      if(answer.equals("drama")){
        System.out.println("Please select a movie:");
        System.out.println("- Titanic \n- BoyHood \n- AttackOnTitan");
          answer = br.readLine();
        if(answer.equals("Titanic")){
          System.out.println("You are now watching the Titanic!");} 
      	else if(answer.equals("Boyhood")){
        	System.out.println("You are now watching Boyhood!");}
        else if(answer.equals("Chinatown")){
        	System.out.println("You are now watching Chinatown!");}
        else{
        	System.out.println("This is not a listed movie!");}
      }
    }
  }
}

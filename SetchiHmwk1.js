public class EthanHmwk1{
  
  public static void main(String [] args) {
    
    String Birth = "04/05";
    String Name = "Setchi";
    int Age = 15;
    int ProgramsShared = 1;
    int Random = 32;
    
    System.out.println("-- Your Profile--");
    System.out.println("Nickname: " + Name);
    System.out.println("Age: " + Age);
    System.out.println("Birthday: " + Birth);
    System.out.println("Programs shared: " + ProgramsShared);
    System.out.println("");
    
    Age = Age + ProgramsShared;
    ProgramsShared = ProgramsShared + Random;
    
    System.out.println("-- Predicted Profile After 1 Year--");
    System.out.println("Nickname: " + Name);
    System.out.println("Age: " + Age);
    System.out.println("Birthday: " + Birth);
    System.out.println("Programs shared: " + ProgramsShared);
    
  }
}


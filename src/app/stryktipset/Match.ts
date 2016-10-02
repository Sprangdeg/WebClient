export class Match{
 constructor ( 
  public Id : number,
  public HomeTeam : string,
  public AwayTeam : string,
  
  public HomeWin : number,
  public AwayWin : number,
  public Draw : number,
  
  public HomeMark: boolean,
  public DrawMark: boolean,
  public AwayMark: boolean
  ) {}
}
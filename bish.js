class NFT {
    constructor(Degree , Course , Branch , UID ) {
      this.Degree = Degree;
      this.Course = Course;
      this.Branch = Branch;
      this.UID = UID;
    }
  }
  
  const nfts = [];
  let count = 0;
  
  function mintNFT(Degree, Course , Branch, UID) {
    const nft = new NFT(Degree, Course , Branch, UID);
    nfts.push(nft);
    count++;
  }
  
  function listNFTs() {
    console.log("The list of total NFTs:\n");
    for (let i = 0; i < count; i++) {
      console.log(nfts[i]);
    }
  }
  
  function getTotalSupply() {
    console.log("The total number of NFTs created by the user:");
    console.log(count);
  }
  
  mintNFT("B.Tech", "BE,", "BCG", " 21BCG1086");
  mintNFT("B.Tech","BE,", "AIML", "21BCS1001");
  
  listNFTs();
  getTotalSupply()
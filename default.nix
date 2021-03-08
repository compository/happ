let 
  holonixPath = builtins.fetchTarball {
    url = "https://github.com/holochain/holonix/archive/cdf1d199d5489ebc943b88e552507f1063e3e571.tar.gz";
    sha256 = "1b5pdlxj91syg1qqf42f49sxlq9qd3qnz7ccgdncjvhdfyricagh";
  };
  holonix = import (holonixPath) {
    includeHolochainBinaries = true;
    holochainVersionId = "custom";
    
    holochainVersion = { 
     rev = "0a87907cfc1dcf5449c111461f4dbb0ade8008a4";  
     sha256 = "08mri22y73yk9l4rz8chkgf6ic6vsm7ymj0qccl8qdwi4mqqrakl";  
     cargoSha256 = "04d94a1add4j2xm03hc29lds96878ba1fp5h8blmbkrifr2x0wfr";
     bins = {
       holochain = "holochain";
       hc = "hc";
     };
    };
  };
in holonix.main

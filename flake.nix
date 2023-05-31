{
  description = "Nix environment for TypeScript-Node projects";

  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        name = "typescript";
        pkgsAllowUnfree = import nixpkgs {
          inherit system;
          config = {
            allowUnfree = true; 
          };
        };

      in
      rec {

        devShell = pkgsAllowUnfree.mkShell {
          buildInputs = with pkgsAllowUnfree; [
            nodejs-18_x
          ];
        };

      }
    );
}

const hre = require("hardhat");

async function main() {
  console.log("Deploying CrossBorderPayment contract...");

  const CrossBorderPayment = await hre.ethers.getContractFactory("CrossBorderPayment");
  const crossBorderPayment = await CrossBorderPayment.deploy();

  await crossBorderPayment.waitForDeployment();

  const address = await crossBorderPayment.getAddress();
  console.log("CrossBorderPayment deployed to:", address);

  // Save deployment info
  const fs = require("fs");
  const deploymentInfo = {
    address: address,
    abi: CrossBorderPayment.interface.format("json"),
    network: hre.network.name,
    deployedAt: new Date().toISOString()
  };

  fs.writeFileSync(
    "./deployment.json",
    JSON.stringify(deploymentInfo, null, 2)
  );

  console.log("Deployment info saved to deployment.json");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
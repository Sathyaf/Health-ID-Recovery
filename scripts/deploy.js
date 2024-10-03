const hre = require("hardhat");

async function main() {
    const HealthIDRecovery = await hre.ethers.getContractFactory("HealthIDRecovery");
    const healthIDRecovery = await HealthIDRecovery.deploy();
    console.log("HealthIDRecovery deployed to:", healthIDRecovery.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

async function main() {
  console.log("Seed skipped: no seed data required.");
}

main()
  .then(() => {
    console.log("Seed completed.");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
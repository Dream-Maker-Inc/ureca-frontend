const fs = require("fs");
const path = `./.env`;
const vars = `
NEXT_PUBLIC_BRN_BASE_URL=${process.env.NEXT_PUBLIC_BRN_SERVICE_KEY}\n
NEXT_PUBLIC_BRN_SERVICE_KEY=${process.env.NEXT_PUBLIC_BRN_SERVICE_KEY}
`;
fs.writeFileSync(path, vars);

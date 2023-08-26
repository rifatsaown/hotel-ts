import 'dotenv/config';
import app from './app';
import { connectToDatabase } from './utils/dbConnect';

const port = process.env.PORT || 5000;

try{
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
        connectToDatabase();
    });
} catch (error) {
    console.log(`Server Error: ${error}`);
}

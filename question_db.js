class Db {
    /**
     * Constructors an object for accessing kittens in the database
     * @param mongoose the mongoose object used to create schema objects for the database
     */
    constructor(mongoose) {
        // This is the schema we need to store kittens in MongoDB
        const questionSchema = new mongoose.Schema({
            text: String,
            answers: [{
                text: String,
                votes: Number
            }]
        });

        // This model is used in the methods of this class to access kittens
        this.questionModel = mongoose.model('Question', questionSchema);
    }

    async getQuestions() {
        try {
            return await this.questionModel.find({});
        } catch (error) {
            console.error("getQuestions:", error.message);
            return {};
        }
    }

    async getQuestion(id) {
        try {
            return await this.questionModel.findById(id);
        } catch (error) {
            console.error("getQuestion:", error.message);
            return {};
        }
    }

    async createQuestion(newQuestion) {
        // TODO: Error handling
        let question = new this.questionModel(newQuestion);
        return await question.save();
    }

    async addAnswer(questionId, answer) {
        // TODO: Error handling
        const question = await this.getQuestion(questionId);
        question.answers.push(anser);
        return await question.save();
    }

    /**
     * This method adds a bunch of test data if the database is empty.
     * @param count The amount of kittens to add.
     * @returns {Promise} Resolves when everything has been saved.
     */
    async bootstrap(count = 10) {
        const answers = ['I do not know', 'I wish I knew', 'Maybe ask someone smarter', 'Did you say something?'];
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        function getRandomQuestion() {
            return ['Gdzie nocą tupta jeż?', 'Are we there yet?', 'Daleko jeszcze?', 'Do you wanna build a snowman?'][getRandomInt(0,3)]
        }

        function getRandomAnswer() {
            const shuffled = answers.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, getRandomInt(1,shuffled.length));
        }

        let l = (await this.getQuestions()).length;
        console.log("Questions collection size:", l);

        if (l === 0) {
            let promises = [];

            for (let i = 0; i < count; i++) {
                let kitten = new kittenModel({
                    question: getRandomQuestion(),
                    answer: getRandomAnswer()
                });
                promises.push(question.save());
            }

            return Promise.all(promises);
        }
    }
}

// We export the object used to access the kittens in the database
module.exports = mongoose => new Db(mongoose);
const db = require('../db');

class SchoolpenController {
    async getAllSchoolpenTypes(req, res) {
        try {
            const [schoolpenTypes] = await db.query('SELECT * FROM schoolpenTypes');
            console.log('Data from the database:', schoolpenTypes);
            res.json(schoolpenTypes);
        } catch (err) {
            console.error('Error getting schoolpen types:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async createSchoolpenType(req, res) {
        try {
            const { name, description } = req.body;

            const newSchoolpenType = await db.query(
                'INSERT INTO schoolpenTypes (name, description) VALUES (?, ?)',
                [name, description]
            );

            const newSchoolpenTypeId = newSchoolpenType[0].insertId;

            const createdSchoolpenType = await db.query('SELECT * FROM schoolpenTypes WHERE id = ?', [newSchoolpenTypeId]);

            res.json(createdSchoolpenType[0]);
        } catch (err) {
            console.error('Error creating schoolpen type:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getOneSchoolpenType(req, res) {
        try {
            const id = req.params.id;
            const [oneSchoolpenType] = await db.query('SELECT * FROM schoolpenTypes WHERE id = ?', [id]);

            if (oneSchoolpenType.length > 0) {
                res.json(oneSchoolpenType[0]);
            } else {
                res.status(404).json({ error: 'Schoolpen type not found' });
            }
        } catch (error) {
            console.error('Error getting one schoolpen type:', error);
            res.status(500).json({ error: 'Error getting one schoolpen type' });
        }
    }

    async updateSchoolpenType(req, res) {
        try {
            const { id, name, description } = req.body;
            await db.query(
                'UPDATE schoolpenTypes SET name = ?, description = ? WHERE id = ?',
                [name, description, id]
            );

            const updatedSchoolpenType = await db.query('SELECT * FROM schoolpenTypes WHERE id = ?', [id]);
            res.json(updatedSchoolpenType[0]);
        } catch (error) {
            console.error('Error updating schoolpen type:', error);
            res.status(500).json({ error: 'Error updating schoolpen type' });
        }
    }

    async deleteSchoolpenType(req, res) {
        try {
            const id = req.params.id;
            const deletedSchoolpenType = await db.query('DELETE FROM schoolpenTypes WHERE id = ?', [id]);
            res.json(deletedSchoolpenType[0]);
        } catch (error) {
            console.error('Error deleting schoolpen type:', error);
            res.status(500).json({ error: 'Error deleting schoolpen type' });
        }
    }
}

module.exports = new SchoolpenController();

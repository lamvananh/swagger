var debug = require('debug')('swagger-express-jsdoc');
var express = require('express');
var router = express.Router();
let parkingSlot = {
  id: 1,
  type: 2,
  position: { x: 1200, y: 400 },
  name: "G32"
}
/**
 * @swagger
 * definitions:
 *   ParkingSlot:
 *     required:
 *       - id
 *     properties:
 *       id:
 *         type: number
 *       Position:
 *         type: "object"
 *         properties:
 *          x:
 *           type: "integer"
 *           format: "int64"
 *          y:
 *           type: "integer"
 *           format: "int64"
 *       name:
 *        type: string
 *       type:
 *        type: string
 */

 /**
 * @swagger
 * definitions:
 *   Position:
 *    properties:
 *       x:
 *         type: number
 *       y:
 *          type: number
 */

/**
* @swagger
* tags:
*   name: Parking
*   description: All about parking API
*/


/**
 * @swagger
 * /parking/get-empty-slot:
 *   get:
 *     summary: Get empty parking slot
 *     description: Use this API to get empty parking slot, please pass in an type 
 *     tags: [Parking]
 *     parameters:
 *       - name: type
 *         in: "query"
 *         description: type of parking, 'car' or 'bike'
 *         type: string
 *       - name: idArea
 *         in: "query"
 *         description: id of parking area
 *         type: string
 *         required: true
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success get  parking slot
 *         schema:
 *         type: "array"
 *         items:
 *         $ref: "#/definitions/ParkingSlot"
 *       500:
 *         description: serve error
 *       007:
 *         description: not found any slot
 */
router.get('/get-empty-slot', function (req, res, next) {
  res.json({ results: parkingSlot });
});



module.exports = router;

import { Router } from 'express'
import { MapsService } from '~/resources/maps/maps.service'
import { BadRequestException, NotFoundException } from '~/utils/exceptions'
/**
 * Nous créeons un `Router` Express, il nous permet de créer des routes en dehors du fichier `src/index.ts`
 */
const MapsController = Router()

/**
 * Instance de notre service
 */
const service = new MapsService()

/**
 * Trouve tous les maps
 */
MapsController.get('/', async (req, res) => {
  const maps = await service.findAll();
  return res
    .status(200)
    .json({ maps })
})


/**
 * On expose notre controller pour l'utiliser dans `src/index.ts`
 */
export { MapsController }
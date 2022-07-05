import type { Map } from '~~/types/maps'
import mapModel from '~/models/maps.model';
import { NotFoundException } from '~/utils/exceptions'

export class MapsService {


  /**
   * Trouve tous les maps
   */
  findAll = async (): Promise<Map[]> => {
    return await mapModel.find({});
  }

}

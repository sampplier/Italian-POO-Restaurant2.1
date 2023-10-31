package ufpb.poo.restaurante.restaurante.facade;

import ufpb.poo.restaurante.restaurante.dto.restauranteDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class restauranteFacede {
    private static final Map<Long, restauranteDTO> restaurante = new HashMap<>();
    public restauranteDTO criar(restauranteDTO restauranteDTO) {
        long proximoId = restaurante.keySet().size() + 1L;
        restauranteDTO.setId(proximoId);
        restaurante.put(proximoId, restauranteDTO);
        return restauranteDTO;
    }
    public restauranteDTO atualizar (restauranteDTO restauranteDTO, Long restauranteId ){
        restaurante.put(restauranteId, restauranteDTO);
        return restauranteDTO;
    }
    public restauranteDTO getById(Long restauranteId){
        return restaurante.get(restauranteId);
    }
    public List<restauranteDTO> getAll(){
        return new ArrayList<>(restaurante.values());
    }
    public String delete(Long restauranteId){
        restaurante.remove(restauranteId);
        return "FOI DE F";
    }
}

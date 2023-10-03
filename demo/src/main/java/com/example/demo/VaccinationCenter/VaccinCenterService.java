package com.example.demo.VaccinationCenter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VaccinCenterService {
    
    @Autowired
    private VaccinCenterRepo centerRepository;

    public List<VaccinationCenter> findAllByCity(String city){
        return centerRepository.findAllByCityLike(city);
    }

     public List<VaccinationCenter> findAll(){
        return centerRepository.findAll();
    }
    
    public VaccinationCenter SaveVaccinCenter(VaccinationCenter Center){
        return centerRepository.save(Center);
    }
}

package com.example.demo.VaccinationCenter.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.VaccinationCenter.entity.VaccinationCenter;
import com.example.demo.VaccinationCenter.repository.VaccinCenterRepo;

@Service
public class VaccinCenterService {
    
    @Autowired
    private VaccinCenterRepo centerRepository;

    public List<VaccinationCenter> findAllByCity(String city){
        return centerRepository.findAllByCityLike(city);
    }
    public VaccinationCenter findById(int id){
        return centerRepository.findById(id).get();
    }

     public List<VaccinationCenter> findAll(){
        return centerRepository.findAll();
    }
    
    public VaccinationCenter SaveVaccinCenter(VaccinationCenter Center){
        return centerRepository.save(Center);
    }
}

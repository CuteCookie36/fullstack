package com.example.demo.VaccinationCenter.service;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.VaccinationCenter.entity.VaccinationCenter;
import com.example.demo.VaccinationCenter.repository.VaccinCenterRepo;

@SpringBootTest
public class VaccinCenterServiceTest {
    
    @Autowired
    VaccinCenterService vaccinCservice;
    @Autowired
    VaccinCenterRepo vaccinCrepo;

     @Test
    public void test2(){
        var VaccinC1 = new VaccinationCenter();
        VaccinC1.setAdress("8 rue des farfalles");
        VaccinC1.setCity("Paris");
        VaccinC1.setName("Centre des oignons");
        this.vaccinCservice.SaveVaccinCenter(VaccinC1);
        
        
        var resultat = vaccinCservice.validationVaccincenter("8 rue des farfalles", "Paris", "Centre des oignons" );
        Assertions.assertThat(resultat).isTrue();
        Assertions.assertThat(this.vaccinCrepo.findByName("Centre des oignons").getCity()).isEqualTo("Paris");
    }

}

//package com.classrooms.configuration;
//
//import javax.sql.DataSource;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//@Configuration
//public class DatabaseConfig {
//
//  @Value("${spring.datasource.url}")
//  private String dbUrl;
//
//  @Bean
//  public DataSource dataSource() {
//      HikariConfig config = new HikariConfig();
//      config.setJdbcUrl(dbUrl);
//      return new HikariDataSource(config);
//  }
//}

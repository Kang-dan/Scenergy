package com.wbm.scenergyspring;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.testcontainers.containers.KafkaContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;
import org.testcontainers.utility.DockerImageName;

@SpringBootTest(classes = ScenergySpringApplication.class)
@Testcontainers
public class IntegrationTest {

	@Container
	static final KafkaContainer kafka = new KafkaContainer(
		DockerImageName.parse("confluentinc/cp-kafka:7.3.3")
	).withReuse(true);

	@DynamicPropertySource
	static void overrideProperties(DynamicPropertyRegistry registry) {
		registry.add("spring.kafka.bootstrap-servers", kafka::getBootstrapServers);
	}

}

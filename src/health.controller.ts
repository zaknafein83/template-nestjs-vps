import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(private readonly health: HealthCheckService) {}

  @Get()
  @HealthCheck()
  check() {
    // Per ora ritorna sempre UP (no DB attivi nel template di default).
    // Quando attivi TypeORM, aggiungi: this.db.pingCheck('database')
    return this.health.check([]);
  }
}
